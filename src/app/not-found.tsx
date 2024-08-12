import { redirect } from 'next/navigation'

const NotFound = () => {
  return redirect('/404')

};

export default NotFound;
