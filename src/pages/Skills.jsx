import PageHeader from '../components/PageHeader';
import GsapReveal from '../components/GsapReveal';
import SkillWebGraph from '../components/SkillWebGraph';

const Skills = () => {
    return (
        <section>
            <GsapReveal>
                <PageHeader
                    eyebrow="Skills"
                    title="My Technical Arsenal"
                    description="A collection of tools and technologies I use to bring ideas to life."
                />
            </GsapReveal>

            <SkillWebGraph />
        </section>
    );
};

export default Skills;
