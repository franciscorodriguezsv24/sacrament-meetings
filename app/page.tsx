import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl">Sacrament Meeting Planner</h1>
        <p className="mt-4 text-lg text-muted">
          Leaders can plan and review each week&apos;s agenda. Members can view and print
          the program for this Sunday or any past week.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/meetings/current"
            className="rounded-md bg-primary px-5 py-3 font-medium text-white hover:opacity-90"
          >
            This Sunday&apos;s program
          </Link>
          <Link
            href="/meetings"
            className="rounded-md border border-primary px-5 py-3 font-medium text-primary hover:bg-primary-light"
          >
            Browse all meetings
          </Link>
        </div>
      </div>
      <Image
        src="/images/chapel.svg"
        alt="Illustration of a white chapel with a tall steeple"
        width={480}
        height={320}
        priority
        className="h-auto w-full rounded-lg border border-border"
      />
    </div>
  );
}
