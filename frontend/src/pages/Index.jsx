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
import AnchorLink from 'react-anchor-link-smooth-scroll';




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
            <section style={{background:"url(/bgImage.svg)"}} className="bg-white w-full h-[94svh] dark:bg-gray-900 grid">

                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 col-start-1 row-start-1 my-auto rounded bg-white dark:bg-gray-900 dark:bg-opacity-50 bg-opacity-80">
                    <div className="flex justify-center items-center">
                        <span className="flex justify-center bg-white dark:bg-gray-900 p-4 rounded mb-6 md:mb-3">
                            <span className="rounded-md mr-3">
                                <img src="/emochaLogo.png" className=" w-16 h-16 md:w-24 md:h-24 rounded-md my-auto" />
                            </span>
                            <span className="flex justify-center items-center">
                                <h1 translate="no" className="font-extrabold md:text-8xl text-5xl dark:text-white">emocha</h1>
                            </span>
                        </span>
                    </div>
                    <h2 className="mb-6 md:mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{language==="English"?<span>Let's start an emoji-only chat !</span>:<span>絵文字だけのチャットを始めよう！</span>}</h2>
                    <p className="mb-10 md:mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{language==="English"?<span>Even if there are no words,<br className="md:hidden"/> we can communicate with each other.</span>:<span>言葉がなくても、心が通じる。</span>}</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <AnchorLink href="#SignUp" offset="170" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            {language==="English"?"Get started":"サインアップ"}
                        </AnchorLink>
                        <AnchorLink href="#LogIn" offset="170" className="py-3 px-5 sm:ms-8 text-base font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                            {language==="English"?"Log in":"ログイン"}
                        </AnchorLink>  
                    </div>
                </div>
            </section>

            <div className="h-16 bg-white"/>
            <div className="m-auto py-10 px-2 bg-green-50 shadow-xl shadow-green-50">
                <div id="LogIn" className="flex flex-col justify-center items-center px-4 md:px-10 py-12 my-40 bg-white dark:bg-gray-900 rounded-md mx-auto md:w-3/6 xl:w-2/5">
                    <h2 className="my-8 text-3xl font-extrabold text-gray-900 text-center dark:text-white">
                    Log in to your account
                    </h2>
                    <form className="mx-auto w-full" noValidate="">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email Address{" "}
                            </label>
                            <input
                            name="email"
                            type="email"
                            onChange={(event) => handleChangeEmail(event)}
                            autoComplete="email"
                            alt="Email Address"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                            aria-required="true"
                            aria-labelledby="email-2450049-label"
                            />
                        </div>
                        <div className="mb-8">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password{" "}
                            </label>
                            <input
                                name="password"
                                type="password"
                                onChange={(event) => handleChangePassword(event)}
                                autoComplete="current-password"
                                alt="Password"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                                aria-required="true"
                                aria-labelledby="password-5211139-label"
                            />
                        </div>
                            {loginError && <p className="text-red-500 mt-2 text-center">{loginError}</p>}
                        <button
                        type="button"
                        onClick={handleSubmitLogin}
                        disabled=""
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Log In
                        </button>
                    
                    {/* <p class="mt-5 max-w font-medium text-center text-gray-600">
                        <span class="hover_text-action-hover cursor-pointer">
                        Forgot your password?
                        </span>
                    </p> */}
                    </form>          
                </div>
                <div className="border-b-2 border-b-white"/>
                <div id="SignUp" className="flex flex-col justify-center items-center px-4 md:px-10 py-12 my-40 bg-white dark:bg-gray-900 rounded-md mx-auto md:w-3/6 xl:w-2/5">
                    <h2 className="my-8 text-3xl font-extrabold text-gray-900 text-center dark:text-white">
                    Sign up to your account
                    </h2>
                    <form className="mx-auto w-full" noValidate="">
                        <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email Address{" "}
                        </label>
                        <input
                            name="email"
                            type="email"
                            onChange={(event) => handleChangeEmail(event)}
                            autoComplete="email"
                            alt="Email Address"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                            aria-required="true"
                            aria-labelledby="email-2450049-label"
                        />
                        </div>
                        <div className="mb-8">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password{" "}
                            </label>
                            <input
                            name="password"
                            type="password"
                            onChange={(event) => handleChangePassword(event)}
                            autoComplete="current-password"
                            alt="Password"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                            aria-required="true"
                            aria-labelledby="password-5211139-label"
                            />
                        </div>
                    {signupError && (
                        <p className="text-red-500 mt-2 text-center">{signupError}</p>
                    )}
                        <button
                        type="button"
                        onClick={handleSubmitSignup}
                        disabled=""
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Sign Up
                        </button>
                    </form>
                
                
            </div>
            </div>
            <footer className="">
            <div className="bg-gray-50">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a href="./" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/emochaLogo.png" className="w-10 h-10 text-white rounded"/>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">&copy; 2024 emocha — 
                        <a href="https://github.com/hirafish/emocha" rel="noopener noreferrer" translate="no" className="text-gray-600 ml-1" target="_blank">
                            りんごらてオバケ 🍏☕👻
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://github.com/hirafish/emocha" target="_blank" className="text-gray-500">
                            <svg fill="currentColor" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" >
                                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            </footer>
      </div>
    </div>
  );
};

export default IndexPage;
