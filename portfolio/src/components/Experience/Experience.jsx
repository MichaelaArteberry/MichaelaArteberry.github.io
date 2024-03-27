import React from "react";
import skills from "../../data/skills";
import history from "../../data/history";
import { getImageUrl } from "../../utils";

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experiences</h2>
            <div>
                <div>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id}>
                                <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`} />
                                <div>
                                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.responsibilities.map((responsibility, id) => {
                                            return (
                                                <li key={id}>{responsibility}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Experience;
