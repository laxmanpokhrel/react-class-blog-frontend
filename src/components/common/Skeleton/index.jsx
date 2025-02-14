import { cn } from '../../../utils';

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted bg-gray-300', className)}
      {...props}
    />
  );
}
