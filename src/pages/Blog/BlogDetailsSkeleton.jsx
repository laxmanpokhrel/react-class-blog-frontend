import Skeleton from '../../components/common/Skeleton';

export default function BlogDetailsSkeleton() {
  return (
    <div className="flex items-start mx-auto w-1/2 p-4 h-full flex-col gap-2">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-8  w-full" />
      <Skeleton className="h-5 mt-6 w-full " />
      <Skeleton className="h-5 w-full " />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-1/2  " />
      {/* <p>{summary}</p> */}
    </div>
  );
}
