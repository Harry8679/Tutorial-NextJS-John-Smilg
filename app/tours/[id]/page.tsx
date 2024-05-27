import Image from 'next/image';
// const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';
import mapsImg from '@/images/pexels-andrew.jpg';

function page({ params }: { params : { id: string }}) {
    return <div>
        <h1 className='text-4xl'>ID: {params.id}</h1>
        <section className='flex gap-x-4 mt-4'>
            {/* Local Image */}
            <div>
                <Image src={mapsImg} alt='maps' width={192} height={192} className='w-48 h-48 object-cover rounded' />
                <h2>Local image</h2>
            </div>
        </section>
    </div>
}

export default page;