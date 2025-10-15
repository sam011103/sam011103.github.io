export default function Index() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6">Introduction</h1>
            <div className="flex flex-col-reverse sm:flex-row gap-6">
                <section className="w-full sm:w-9/12">
                    <p className="leading-relaxed sm:text-lg">
                        Welcome to my portfolio! My name is Sam Heng Zi Sam. I am a software engineering fresh graduate from <b>Universiti 
                        Tunku Abdul Rahman (UTAR)</b>. I have been graduated since <b>September,2024</b> with merit (3.54 GPA). I am expertise in 
                        Web Development Projects. My stacks are <b>React.js, Laravel, MySQL</b> and etc. Besides that, I am able to develop 
                        Mobile Applications using <b>React Native</b>. Additionally, I have the knowledge of using DevOps tools such as <b>Docker, 
                        Git, Jenkins</b> and etc. I have 3 months experience as a Laravel Web Developer Intern at <b>Delhub Digital Sdn Bhd. </b>
                        Moreover, I have implemented a <b>Children Monitoring System</b> for my final year project and a <b>Task Management System</b>. 
                        I am a fast learner and I am willing to learn new technologies which makes me also a quick adapter to new environment.
                    </p>
                </section>
                <section className="flex justify-center sm:w-1/4 sm:justify-end">
                    <img
                        className="rounded-full object-cover w-3/4"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                    />
                </section>
            </div>
        </>

    );
}