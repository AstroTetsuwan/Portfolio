import React from 'react';
import ResumeJobElement from './ResumeJobElement';

function ResumeJobs(props){
    let jobs = [];
    jobs.push({date: ("app.job-1.date"), name: ("app.job-1.name"), place:("app.job-1.place"), tasks:["app.job-1.task-1"]});
    jobs.push({date: ("app.job-2.date"), name: ("app.job-2.name"), place:("app.job-2.place"), tasks:["app.job-2.task-1", "app.job-2.task-2","app.job-2.task-3"]});
    jobs.push({date: ("app.job-3.date"), name: ("app.job-3.name"), place:("app.job-3.place"), tasks:["app.job-3.task-1", "app.job-3.task-2","app.job-3.task-3","app.job-3.task-4"]});
    jobs.push({date: ("app.job-4.date"), name: ("app.job-4.name"), place:("app.job-4.place"), tasks:["app.job-4.task-1", "app.job-4.task-2","app.job-4.task-3"]});

    return(
        <div>
            {jobs.map((job, i) => <ResumeJobElement job={job} key={i} id={i}/>)}
        </div>
    );
}
export default ResumeJobs;