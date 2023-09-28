import { useRouter } from "next/router";

export default function StaticRoutePage() {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <>
      PAGE2<button onClick={onClickBack}>버튼</button>
    </>
  );
}
