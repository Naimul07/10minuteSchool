import ChechLists from "@/components/ChechLists";
import CourseDeatials from "@/components/CourseDeatials";
import CourseLaidout from "@/components/CourseLaidout";
import Cta from "@/components/Cta";
import ExclusiveFeatures from "@/components/ExclusiveFeatures";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import LearnbyCourse from "@/components/LearnbyCourse";
;
import Trailer from "@/components/Trailer";


export default async function Home() {
  const res = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
  const res1 = await res.json();
  const data = res1.data
  return (
    <div>
      <div>
        <Hero hero={data}/>
        <Instructors teacher={data.sections}/>
        <CourseLaidout contents ={data.sections}/>
        <LearnbyCourse contents ={data.sections}/>
        <ExclusiveFeatures/>
        <CourseDeatials/>
      </div>
      <div>
        <Trailer/>
        <Cta/>
        <ChechLists/>
      </div>
    </div>
  );
}
