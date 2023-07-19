
export const metadata = {
  title: 'ADMIN',
  description: 'Admin',
}

export default async function Page() {
  return (
      <section>
        <h1>ADMIN</h1>
      </section>
  );
}

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { verifyTokenAndGetRole } from '@/utils/auth';
// import ROLES from '@/config/roles';

// const Page = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     const userRole = verifyTokenAndGetRole(token);

//     if (!userRole || !ROLES.SuperAdmin.includes(userRole)) {
//       router.push('/unauthorized');
//     }
//   }, []);

//   return <div>Admin Page</div>;
// };

// export default Page;


