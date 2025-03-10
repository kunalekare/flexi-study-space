
import React from "react";
import { Link } from "react-router-dom";

interface RelatedSubjectsProps {
  currentSubjectTitle: string;
  subjectData: Record<string, any>;
}

const RelatedSubjects = ({ currentSubjectTitle, subjectData }: RelatedSubjectsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Related Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(subjectData)
          .filter(relatedSubject => relatedSubject.title !== currentSubjectTitle)
          .slice(0, 3)
          .map((relatedSubject) => (
            <Link
              key={relatedSubject.title}
              to={`/subjects/${Object.keys(subjectData).find(key => subjectData[key].title === relatedSubject.title)}`}
              className={`relative overflow-hidden rounded-xl p-6 border border-border hover:border-primary/30 transition-all ${relatedSubject.color} hover-lift`}
            >
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${relatedSubject.textColor}`}>
                  {relatedSubject.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{relatedSubject.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{relatedSubject.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedSubjects;
