import Home from '@/components/Home';
import getFormData from '@/utils/getFormData';

export default async function HomePage() {
  const formInputs = await getFormData();
  return <Home formInputs={formInputs} />
}
