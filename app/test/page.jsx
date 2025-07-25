import Hero from "@/components/Hero";

export default async function Page() {
    const res = await fetch(
        'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
        { cache: 'no-store' } // to avoid caching in dev
    );
    const data = await res.json();
    const course = data.data;

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">

            <Hero lace={course}/>
        </div>
    );
}
