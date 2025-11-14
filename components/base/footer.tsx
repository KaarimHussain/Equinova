import LogoSingular from "@/public/assets/Logo-Singular.svg"
import Image from "next/image"

export default function Footer() {
    return (
        <>
            <div className="min-h-[20vh] bg-transparent relative">
                <div className="min-h-[20vh] rounded-t-4xl bg-black pb-5 pt-15 lg:px-10 md:px-5 px-3">
                    <div className=" flex flex-col justify-between min-h-[20vh]">
                        {/* Logo Section */}
                        <div className="flex justify-center items-center flex-1 mb-3">
                            <div className="relative w-full">
                                {/* Large EQUINOVA text with logo */}
                                <div className="flex items-center justify-center">
                                    <h2 className="text-[17vw] font-semibold tracking-tighter leading-0">
                                        <span className="bg-linear-to-b from-secondary-foreground via-secondary-300 to-black bg-clip-text text-transparent">
                                            EQUIN
                                        </span>
                                    </h2>
                                    <div className="relative">
                                        <Image
                                            src={LogoSingular}
                                            alt="Equinova Logo"
                                            className="
                                                w-16 h-16
                                                sm:w-24 sm:h-24
                                                md:w-32 md:h-32
                                                lg:w-60 lg:h-60
                                                aspect-square
                                                object-contain
                                                lg:object-cover
                                            "
                                        />
                                    </div>
                                    <h2 className="text-[17vw] font-semibold tracking-tighter leading-0">
                                        <span className="bg-linear-to-b from-secondary-foreground via-secondary-300 to-black bg-clip-text text-transparent">
                                            VA
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="border-t border-secondary-foreground pt-5">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                {/* Copyright */}
                                <p className="text-secondary-foreground text-sm md:text-base">
                                    © 2025 Equinova. All Rights Reserved.
                                </p>

                                {/* Social Links */}
                                <div className="flex items-center gap-8">
                                    <a
                                        href="#"
                                        className="text-secondary-foreground hover:text-gray-400 transition-colors text-sm md:text-base font-medium"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="#"
                                        className="text-secondary-foreground hover:text-gray-400 transition-colors text-sm md:text-base font-medium"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="#"
                                        className="text-secondary-foreground hover:text-gray-400 transition-colors text-sm md:text-base font-medium"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="#"
                                        className="text-secondary-foreground hover:text-gray-400 transition-colors text-sm md:text-base font-medium"
                                    >
                                        YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}