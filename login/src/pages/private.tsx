import { GetServerSideProps } from "next";
import { parseCookies } from "../utils/cookies";

const PrivatePage = () => {
  return (
    <div>
      Página Privadas
    </div>
  );
};

export default PrivatePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req)
  // console.log(cookies)
  if (!cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      }
    }
  }

  return {
    props: {

    }
  }
}
