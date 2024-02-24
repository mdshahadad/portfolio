import { Accordion } from "flowbite-react";

const FAQDetails = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="linear"
            className="mt-16 md:max-w-5xl md:mx-auto mx-4">
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title className="text-xl md:text-2xl">Who am i?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white dark:text-white">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-white dark:text-white">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-xl md:text-2xl">Is there a Figma file available?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white dark:text-white">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-white dark:text-white">
                            Check out the 
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-xl md:text-2xl">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white dark:text-white">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                            components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-white dark:text-white">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-white dark:text-white">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-white dark:text-white">
                            <li>
                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Flowbite Pro
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Tailwind UI
                                </a>
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQDetails;