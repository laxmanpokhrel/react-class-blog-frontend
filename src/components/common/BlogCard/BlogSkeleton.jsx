import Skeleton from '../Skeleton';

export default function BlogSkeleton() {
  return (
    <div className="col-span-12 md:col-span-4 flex flex-col gap-2 font-roboto lg:col-span-3  shadow p-4 border border-gray-300 rounded-2xl ">
      <Skeleton className="w-[15rem] h-6 " />
      <Skeleton className="w-[15rem] h-2 " />
      <Skeleton className="w-[15rem] h-2 " />
      <Skeleton className="w-[10rem] h-3 " />
    </div>
  );
}
