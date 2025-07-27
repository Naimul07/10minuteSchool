import ChechLists from "@/components/ChechLists";
import CourseDeatials from "@/components/CourseDeatials";
import CourseLaidout from "@/components/CourseLaidout";
import Cta from "@/components/Cta";
import ExclusiveFeatures from "@/components/ExclusiveFeatures";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import LearnbyCourse from "@/components/LearnbyCourse";
import Trailer from "@/components/Trailer";

export default async function Home() {
  const res = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
  const res1 = await res.json();
  const data = res1.data;

  return (
    <div>
      <div className="relative">
        <Hero hero={data} />
      </div>

      <div className="container mx-auto mt-[-280px] relative z-10 md:px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 mt-[280px]">
            <div className="md:hidden">
              <Cta des={data.cta_text} />
              <ChechLists list={data.checklist} />
            </div>
            <Instructors teacher={data.sections} />
            <CourseLaidout contents={data.sections} />
            <LearnbyCourse contents={data.sections} />
            <ExclusiveFeatures contents={data.sections} />
            <CourseDeatials contents={data.sections} />
          </div>

          {/* Sidebar (Trailer + CTA + Sticky Checklist) */}
          <div className="hidden md:block md:col-span-1 px-2 rounded-md space-y-4 bg-white">
            
            <Trailer contents={data.media} />
            <Cta des={data.cta_text} />
            <div className="sticky top-4 shadow-md rounded-md px-2">
              <ChechLists list={data.checklist} />
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}
