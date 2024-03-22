import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import LogoSet from "../components/main/globalParts/LogoSet";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase/config";
import { ref, set, get } from "firebase/database";
import { useContext } from "react";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";
import { DarkModeContext } from "../components/providers/DarkModeProviders";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { LanguagesCatalogContext } from "../components/providers/LanguagesCatalogProvider";




const IndexPage = () => {
  const { userSettings } = useContext(UserSettingsContext);

  //ユーザー登録---------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigation = useNavigate();

  // DBへの送信処理
  const sendUserData = async (userId) => {
    try {
      const userRef = ref(db, `Users/${userId}`);
      let payload = {
        id: userId,
        name: "anonymous user",
        iconText: "@" + "Ghost" + ";" + "Black" + ";",
        language: "Japanese",
        snsUrl: "",
      };
      await set(userRef, payload);
      localStorage.setItem("name", "anonymous user");
      localStorage.setItem("image", "Ghost");
      localStorage.setItem("color", "Black");
      localStorage.setItem("language", "Japanese");
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmitSignup = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendUserData(user.uid); // ここで処理を待つ
      console.log("ユーザー登録完了", user);
      navigation("/main/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("エラーメッセージ", errorCode, errorMessage);

      switch (errorCode) {
        case "auth/invalid-email":
          setSignupError("⚠️Email address format is incorrect");
          break;
        case "auth/weak-password":
          setSignupError("⚠️Password should be at least 6 characters");
          break;
        default:
          setSignupError(
            "⚠️An error has occurred. Please contact the management."
          );
          break;
      }
    }
  };
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  //--------------------------------

  //ログイン-------------------------
  const handleSubmitLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("ログイン完了", user.uid);
        const userId = user.uid;

        // Realtime Databaseに保存されているユーザー設定を取得
        const userRef = ref(db, `Users/${userId}`);
        return get(userRef); // ここでreturnしてPromiseをチェーンの次へ渡す
      })
      .then((snapshot) => {
        // 前のPromiseの結果がここに渡される
        const userId = localStorage.getItem("id")
          ? localStorage.getItem("id")
          : null;
        if (snapshot.exists()) {
          let data = snapshot.val();
          // ローカルストレージへの保存処理
          let iconText = data.iconText;
          let imageAndColor = iconText.split(";");
          let filteredParts = imageAndColor
            .filter((part) => part)
            .map((part) => part.replace("@", ""));
          localStorage.setItem("id", userId);
          localStorage.setItem("image", filteredParts[0]);
          localStorage.setItem("color", filteredParts[1]);
          localStorage.setItem("name", data.name);
          localStorage.setItem("snsUrl", data.snsUrl);
          localStorage.setItem("language", data.language);
        } else {
          console.log("No data available");
        }
      })
      .then(() => {
        // 1度リロードするためにnavigateではない移動処理
        window.location.href = "/main/home";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("エラーメッセージ", errorCode, errorMessage);

        switch (errorCode) {
          case "auth/invalid-email":
            setLoginError("⚠️Email address format is incorrect");
            break;
          case "auth/invalid-credential":
            setLoginError("⚠️User is invalid");
            break;
          case "auth/user-not-found":
            setLoginError("⚠️User does not exist");
            break;
          case "auth/wrong-password":
            setLoginError("⚠️Password is incorrect");
            break;
          case "auth/too-many-requests":
            setLoginError("⚠️Too many password attempts");
            break;
          default:
            setLoginError(
              "⚠️An error has occurred. Please contact the management."
            );
            break;
        }
      });
  };
  //--------------------------------
    // ダークモードの切り替え
    const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext);

    const toggleDarkMode = (checked) => {
        setIsDarkMode(checked);
    };

    useEffect(()=>{
        if (isDarkMode===true) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    },[isDarkMode]);

    // --------------------------------------
    // 表示言語設定
    const languagesCatalog=useContext(LanguagesCatalogContext);
    const [language,setLanguage]=useState(languagesCatalog[0]);

    const handleChangeSetupPageLanguage=(event)=>{
        setLanguage(event.target.value);
    };

  return (
    <div className="main flex-1 flex flex-col min-h-0 dark:bg-gray-900">
        <header className="sticky top-0 w-full bg-white shadow flex justify-between dark:bg-gray-900 dark:shadow-gray-100">
            <span className="text-xl xl:text-3xl font-medium mx-8 dark:text-white flex items-center">
                <LogoSet />
            </span>
            <div className="my-4 mr-6 xl:mr-10 flex justify-center items-center">
                <span className="flex items-center justify-center p-1 mr-2 rounded-md hover:bg-gray-300  cursor-pointer dark:hover:bg-gray-700">
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={20}
                        />
                </span>
                <form className="max-w-sm mx-auto">
                    <select value={language} onChange={handleChangeSetupPageLanguage} id="underline_select" className="block py-1 px-1 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200  dark:text-white dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        {languagesCatalog.map((language,index)=>{
                            return (
                                <option key={index} value={language}>{language}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
        </header>


      <div className="flex-1 w-full h-full">

      <section style={{background:"url(/bgImage.svg)"}} class="bg-white w-full h-screen dark:bg-gray-900 grid">

    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 col-start-1 row-start-1 my-auto">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Learn more
            </a>  
        </div>
    </div>
</section>






        <div className="lg:flex m-auto">
          <div class="flex flex-col flex-1 justify-center lg_justify-start px-4 sm_px-6 py-12 lg_pt-36 lg_flex-none lg_px-20 xl_px-24">
            <div class="md_h-3/4 w-full max-w-sm mx-auto lg_w-96">
              <div class="mt-8">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                  Log in to your account
                </h2>
                <form class="m-0 space-y-4 " novalidate="">
                  <div class="mb-6"></div>
                  <div class="space-y-4">
                    <div class="flex flex-col svelte-1jymqly">
                      <label
                        for="email-2450049"
                        class="block text-gray-700 mb-3 font-medium svelte-1jymqly"
                      >
                        Email Address{" "}
                      </label>
                      <input
                        name="email"
                        type="email"
                        onChange={(event) => handleChangeEmail(event)}
                        autocomplete="email"
                        alt="Email Address"
                        required=""
                        class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused"
                        aria-required="true"
                        aria-labelledby="email-2450049-label"
                      />
                    </div>
                    <div class="relative ">
                      <div class="flex flex-col svelte-1jymqly">
                        <label
                          for="password-5211139"
                          class="block text-gray-700 mb-3 font-medium svelte-1jymqly"
                        >
                          Password{" "}
                        </label>
                        <input
                          name="password"
                          type="password"
                          onChange={(event) => handleChangePassword(event)}
                          autocomplete="current-password"
                          alt="Password"
                          required=""
                          class="svelte-1jymqly leftPadding addRounding addBorder addShadow"
                          aria-required="true"
                          aria-labelledby="password-5211139-label"
                        />
                      </div>
                    </div>
                  </div>
                  {loginError && <p class="text-red-500 mt-2">{loginError}</p>}
                  <div class="flex pt-3 space-x-3 w-full h-10">
                    <button
                      type="button"
                      onClick={handleSubmitLogin}
                      disabled=""
                      class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10"
                    >
                      Log In
                    </button>
                  </div>
                  <p class="mt-5 max-w font-medium text-center text-gray-600">
                    <span class="hover_text-action-hover cursor-pointer">
                      Forgot your password?
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div class="flex flex-col flex-1 lg_justify-start px-4 sm_px-6 py-12 lg_pt-36 lg_flex-none lg_px-20 xl_px-24">
            <div class="md_h-3/4 w-full max-w-sm mx-auto lg_w-96">
              <div class="mt-8">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                  Sign up to your account
                </h2>
                <form class="m-0 space-y-4" novalidate="">
                  <div class="mb-6"></div>
                  <div class="space-y-4">
                    <div class="flex flex-col svelte-1jymqly">
                      <label
                        for="email-2450049"
                        class="block text-gray-700 mb-3 font-medium svelte-1jymqly"
                      >
                        Email Address{" "}
                      </label>
                      <input
                        name="email"
                        type="email"
                        onChange={(event) => handleChangeEmail(event)}
                        autocomplete="email"
                        alt="Email Address"
                        required=""
                        class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused"
                        aria-required="true"
                        aria-labelledby="email-2450049-label"
                      />
                    </div>
                    <div class="relative ">
                      <div class="flex flex-col svelte-1jymqly">
                        <label
                          for="password-5211139"
                          class="block text-gray-700 mb-3 font-medium svelte-1jymqly"
                        >
                          Password{" "}
                        </label>
                        <input
                          name="password"
                          type="password"
                          onChange={(event) => handleChangePassword(event)}
                          autocomplete="current-password"
                          alt="Password"
                          required=""
                          class="svelte-1jymqly leftPadding addRounding addBorder addShadow"
                          aria-required="true"
                          aria-labelledby="password-5211139-label"
                        />
                      </div>
                    </div>
                  </div>
                  {signupError && (
                    <p class="text-red-500 mt-2">{signupError}</p>
                  )}
                  <div class="flex pt-3 space-x-3 w-full h-10">
                    <button
                      type="button"
                      onClick={handleSubmitSignup}
                      disabled=""
                      class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
