import React from 'react';
import classes from './FAQ.module.css';
import QuestionAnswer from './QuestionAnswer';
const FAQ = () => {
    return (
        <section className={classes.faqSection}>
            <h2>Foire aux questions</h2>
            <div className={classes.questionAnswerWrapper}>
                <QuestionAnswer question="Combien coûte un site ?" answer="Un site coûte de X à X euros. Cela est très variables en fonction d'un tas de chose blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum aut fugit, repudiandae nihil magni a officia ex distinctio dolorum corrupti sint nam praesentium, unde voluptatum repellat, eveniet quaerat veniam??" />
                <QuestionAnswer question="Combien de temps pour un site complet ?" answer="Un site coûte de X à X euros. Cela est très variables en fonction d'un tas de chose blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum aut fugit, repudiandae nihil magni a officia ex distinctio dolorum corrupti sint nam praesentium, unde voluptatum repellat, eveniet quaerat veniam??" />
                <QuestionAnswer question="Quels sont les technologies que vous utilisez ?" answer="Un site coûte de X à X euros. Cela est très variables en fonction d'un tas de chose blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum aut fugit, repudiandae nihil magni a officia ex distinctio dolorum corrupti sint nam praesentium, unde voluptatum repellat, eveniet quaerat veniam??" />
                <QuestionAnswer question="Pourquoi ne pas faire un site wordpress ?" answer="Un site coûte de X à X euros. Cela est très variables en fonction d'un tas de chose blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum aut fugit, repudiandae nihil magni a officia ex distinctio dolorum corrupti sint nam praesentium, unde voluptatum repellat, eveniet quaerat veniam??" />
            </div>

            <div className={classes.bottomCAT}>
                <p>D'autres questions en suspens ?</p>
                <button className='primary-button'>Réserver un appel</button>
            </div>
        </section>
    );
};

export default FAQ;