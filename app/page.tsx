import { redirect } from 'next/navigation';

// Root page — middleware rewrites unprefixed paths to /ru/ internally,
// so this should rarely be reached. Safety redirect to /ru for [lang] route.
export default function RootPage() {
  redirect('/ru');
}
