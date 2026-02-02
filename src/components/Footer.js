import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden text-white">
            <div className="h-[2px] w-full bg-white/25" />

            <div className="relative bg-[#0B2E5F]">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute -left-24 -top-24 h-72 w-72 rotate-12 rounded-[60px] bg-white/10" />
                    <div className="absolute left-1/3 top-10 h-56 w-56 -rotate-12 rounded-[60px] bg-white/8" />
                    <div className="absolute right-0 -bottom-28 h-80 w-80 rotate-6 rounded-[80px] bg-black/15" />
                    <div className="absolute right-40 top-6 h-52 w-52 rotate-12 rounded-[60px] bg-white/6" />
                </div>

                {/* reduced padding here */}
                <div className="relative mx-auto max-w-6xl px-6 py-6">
                    {/* reduced gap here */}
                    <div className="grid gap-6 md:grid-cols-4 md:gap-x-16">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                                    <span className="text-base font-bold">⚡</span>
                                </div>
                                <h3 className="text-xl font-extrabold tracking-tight">E-Cell</h3>
                            </div>

                            <p className="mt-3 max-w-sm text-sm leading-5 text-white/80">
                                Empowering innovation & entrepreneurship among students by
                                building a startup ecosystem.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 className="text-base font-semibold">Quick links</h4>
                            <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                                <li><Link className="hover:text-white" to="/about">About</Link></li>
                                <li><Link className="hover:text-white" to="/events">Events</Link></li>
                                <li><Link className="hover:text-white" to="/team">Team</Link></li>
                                <li><Link className="hover:text-white" to="/gallery">Gallery</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-base font-semibold">Contact</h4>
                            <ul className="mt-3 space-y-2 text-sm text-white/80">
                                <li>RGUKT Ongole Campus</li>
                                <li>
                                    <a className="hover:text-white" href="mailto:ecell@rguktongole.ac.in">
                                        ecell@rguktongole.ac.in
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white" href="tel:+9191XXXXXXXXXX">
                                        +91 91XXXXXXXXXX
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h4 className="text-base font-semibold">Follow Us</h4>

                            <div className="mt-3 space-y-2">
                                <a
                                    href="https://www.instagram.com/bloodyromeos/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 text-sm text-white/85 hover:text-white"
                                >
                                    {/* reduced icon box size */}
                                    <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ff7a00] text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-[1px]">
                                        <FaInstagram />
                                    </span>
                                    Instagram
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/e-cell-rgukt-ongole/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 text-sm text-white/85 hover:text-white"
                                >
                                    <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ff7a00] text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-[1px]">
                                        <FaLinkedinIn />
                                    </span>
                                    LinkedIn
                                </a>

                                <a
                                    href="https://x.com/N_Ram_Charan"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 text-sm text-white/85 hover:text-white"
                                >
                                    <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ff7a00] text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-[1px]">
                                        <FaTwitter />
                                    </span>
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* reduced top margin + padding */}
                    <div className="mt-6 border-t border-white/15 pt-3 text-xs text-white/70">
                        © {new Date().getFullYear()} E-Cell RGUKT Ongole. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
