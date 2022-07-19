import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1>Coffee Store Page {router.query.id}</h1>
      <Link href="/" prefetch={true}>
        Back to home
      </Link>
    </>
  );
};

export default CoffeeStore;
