import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({ children }: LayoutProps<'/meetings'>) {
  return (
    <div>
      <div className="mb-6 border-b border-border pb-4">
        <NavLinks />
      </div>
      {children}
    </div>
  );
}
