import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import LogoSet from "../components/main/globalParts/LogoSet";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useContext } from "react";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";




const IndexPage = () => {
    const{userSettings}=useContext(UserSettingsContext);


    //ユーザー登録---------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const navigation = useNavigate();

    const handleSubmitSignup = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("ユーザー登録完了", user)
            navigation("/main/home")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("エラーメッセージ",
                errorCode, errorMessage);
            
            switch (errorCode) {
                case 'auth/invalid-email':
                    setSignupError("⚠️Email address format is incorrect");
                    break;
                case 'auth/weak-password':
                    setSignupError("⚠️Password should be at least 6 characters");
                    break;
                default:
                    setSignupError("⚠️An error has occurred. Please contact the management.");
                    break;
            }    
          });
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
        console.log("ログイン完了", user)
        navigation("/main/home")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("エラーメッセージ",
                errorCode, errorMessage);

            switch (errorCode) {
                case 'auth/invalid-email':
                    setLoginError("⚠️Email address format is incorrect");
                    break;
                case 'auth/invalid-credential':
                    setLoginError("⚠️User is invalid");
                    break;
                case 'auth/user-not-found':
                    setLoginError("⚠️User does not exist");
                    break;
                case 'auth/wrong-password':
                    setLoginError("⚠️Password is incorrect");
                    break;
                case 'auth/too-many-requests':
                    setLoginError("⚠️Too many password attempts");
                    break;
                default:
                    setLoginError("⚠️An error has occurred. Please contact the management.");
                    break;
            }
        });
    };
    //--------------------------------


    return (
        <div className="main-body container m-auto w-11/12 h-full flex flex-col overflow-auto  bg-gray-100">
            <header className="py-4 flex-2 flex flex-row bg-white">
                <span className="text-xl xl:text-3xl font-medium mx-8 dark:text-white flex items-center">
                    <LogoSet />
                </span>
            </header>

            <div className="flex-1 w-full h-full">
                <div className="lg:flex m-auto">

                    <div class="flex flex-col flex-1 justify-center lg_justify-start px-4 sm_px-6 py-12 lg_pt-36 lg_flex-none lg_px-20 xl_px-24">
                        <div class="md_h-3/4 w-full max-w-sm mx-auto lg_w-96">
                            <div class="mt-8">
                                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                                <form class="m-0 space-y-4 " novalidate="">
                                    <div class="mb-6"></div>
                                    <div class="space-y-4">
                                        <div class="flex flex-col svelte-1jymqly">
                                            <label for="email-2450049" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Email Address </label>
                                            <input name="email" type="email" onChange={(event) => handleChangeEmail(event)} autocomplete="email" alt="Email Address" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused" aria-required="true" aria-labelledby="email-2450049-label" />
                                        </div>
                                        <div class="relative ">
                                            <div class="flex flex-col svelte-1jymqly">
                                                <label for="password-5211139" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Password </label> 
                                                <input name="password" type="password" onChange={(event) => handleChangePassword(event)} autocomplete="current-password" alt="Password" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow" aria-required="true" aria-labelledby="password-5211139-label" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {loginError && <p class="text-red-500 mt-2">{loginError}</p>}
                                    <div class="flex pt-3 space-x-3 w-full h-10">
                                            <button type="button" onClick={handleSubmitLogin} disabled="" class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10">Log In</button>
                                    </div>
                                    <p class="mt-5 max-w font-medium text-center text-gray-600"><span class="hover_text-action-hover cursor-pointer">Forgot your password?</span></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col flex-1 lg_justify-start px-4 sm_px-6 py-12 lg_pt-36 lg_flex-none lg_px-20 xl_px-24">
                        <div class="md_h-3/4 w-full max-w-sm mx-auto lg_w-96">
                            <div class="mt-8">
                                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                                <form class="m-0 space-y-4" novalidate="" >
                                    <div class="mb-6"></div>
                                    <div class="space-y-4">
                                        <div class="flex flex-col svelte-1jymqly">
                                            <label for="email-2450049" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Email Address </label>
                                            <input name="email" type="email" onChange={(event) => handleChangeEmail(event)} autocomplete="email" alt="Email Address"  required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused" aria-required="true" aria-labelledby="email-2450049-label" />
                                        </div>
                                        <div class="relative ">
                                            <div class="flex flex-col svelte-1jymqly">
                                                <label for="password-5211139" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Password </label> 
                                                <input name="password" type="password" onChange={(event) => handleChangePassword(event)} autocomplete="current-password" alt="Password" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow" aria-required="true" aria-labelledby="password-5211139-label" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {signupError && <p class="text-red-500 mt-2">{ signupError }</p>}
                                    <div class="flex pt-3 space-x-3 w-full h-10">
                                         <button type="button" onClick={handleSubmitSignup} disabled="" class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10">Sign In</button>
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