import { headers } from 'next/headers'
export const dynamic = 'force-dynamic';

export default async function Page() {
    const headersList = await headers();
    const authorization = (await headers()).get('Authorization');

    console.log('authorization', headersList.get);

    return <h1>Authorization {authorization}</h1>
}