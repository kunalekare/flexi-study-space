
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SubjectCard from "./SubjectCard";
import subjects from "./SubjectData";

const SubjectCards = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Inclusive Subjects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our range of subjects, each designed with accessibility at its core to accommodate different learning styles and needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/subjects">View All Subjects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubjectCards;
