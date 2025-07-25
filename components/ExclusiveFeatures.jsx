import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const ExclusiveFeatures = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">কোর্স এক্সক্লুসিভ ফিচার</h2>

      <div className="bg-white border rounded-lg p-6 space-y-10 shadow-sm">

        {/* Section 1: ভিডিও লেকচার */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ভিডিও লেকচার</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>IELTS Academic ও General Training নিয়ে আলোচনা</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>Reading, Writing, Listening ও Speaking এর Overview & Format</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্রাটেজি</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>ভিডিওর সাথে প্র্যাকটিসের সুযোগ</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/video-lectures.jpg"
              alt="Video Lectures"
              className="rounded-lg w-full max-w-xs mx-auto"
            />
          </div>
        </div>

        <hr />

        {/* Section 2: Reading & Listening Mock Tests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Reading ও Listening Mock Tests</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>10 Reading & 10 Listening Mock Tests</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                <p>যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/mock-tests.jpg"
              alt="Mock Tests"
              className="rounded-lg w-full max-w-xs mx-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
};




export default ExclusiveFeatures