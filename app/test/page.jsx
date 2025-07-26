'use client'
import Hero from "@/components/Hero";
import Image from "next/image";
import { useState } from "react";

export default async function Page() {
    const res = await fetch(
        'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
        { cache: 'no-store' } // to avoid caching in dev
    );
    const data = await res.json();
    const course = data.data;
  
}
