import { NavLink } from "react-router-dom";

const IndexPage = () => {
    return (
        <div className="main-body container m-auto w-11/12 h-full flex flex-col overflow-auto  bg-gray-100">
            <header className="py-4 flex-2 flex flex-row bg-white">
                ヘッダー
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
                                            <label for="email-2450049" id="email-2450049-label" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Email Address </label>
                                            <input name="email" id="email-2450049" type="email" autocomplete="email" alt="Email Address" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused" aria-required="true" aria-labelledby="email-2450049-label" />
                                        </div>
                                        <div class="relative ">
                                            <div class="flex flex-col svelte-1jymqly">
                                                <label for="password-5211139" id="password-5211139-label" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Password </label> 
                                                <input name="password" id="password-5211139" type="password" autocomplete="current-password" alt="Password" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow" aria-required="true" aria-labelledby="password-5211139-label" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="flex pt-3 space-x-3 w-full h-10">
                                        <NavLink to={"/main/home"} className="navLink cursor-pointer w-full h-10">
                                            <button type="submit" disabled="" class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10">Log In</button>
                                        </NavLink>
                                    </div>
                                    <p class="mt-5 max-w font-medium text-center text-gray-600"><span class="hover_text-action-hover cursor-pointer">Forgot your password?</span></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col flex-1 justify-center lg_justify-start px-4 sm_px-6 py-12 lg_pt-36 lg_flex-none lg_px-20 xl_px-24">
                        <div class="md_h-3/4 w-full max-w-sm mx-auto lg_w-96">
                            <div class="mt-8">
                                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                                <form class="m-0 space-y-4 " novalidate="">
                                    <div class="mb-6"></div>
                                    <div class="space-y-4">
                                        <div class="flex flex-col svelte-1jymqly">
                                            <label for="email-2450049" id="email-2450049-label" class="block text-gray-700 mb-3 font-medium svelte-1jymqly">Email Address </label>
                                            <input name="email" id="email-2450049" type="email" autocomplete="email" alt="Email Address" required="" class="svelte-1jymqly leftPadding addRounding addBorder addShadow autofocused" aria-required="true" aria-labelledby="email-2450049-label" />
                                        </div>
                                    </div>
                                    <div class="flex pt-3 space-x-3 w-full h-10">
                                        <NavLink to={"/setup"} className="navLink cursor-pointer w-full h-10">
                                            <button type="submit" disabled="" class="standard primary fullwidth hoverable svelte-dqutwx bg-purple-600  text-white w-full h-10">Sign In</button>
                                        </NavLink>
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