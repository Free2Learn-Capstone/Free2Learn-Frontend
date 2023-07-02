import Head from 'next/head';
import Header from "@components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {}

export default function page({}: Props) {
  return (
    <div className="container">
            <Header />
      <Head>
        <title>Privacy Policy</title>
      </Head>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4">
            <h1 className="text-center mb-4 mt-4">Privacy Policy</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              ipsum erat. Proin non ligula a enim lobortis efficitur nec vel
              nulla. Mauris consectetur ante id ante bibendum, in pharetra mi
              viverra. Sed euismod elementum arcu, sed dictum mi elementum sed.
              Fusce luctus mi nec augue vulputate, eu ultrices nulla dignissim.
              Cras ullamcorper libero a magna tincidunt posuere.
            </p>
            <p className="text-center">
              Etiam condimentum elit ut sem faucibus aliquet. Mauris eu
              vestibulum mi. Donec malesuada dui a quam tincidunt, in faucibus
              dui iaculis. Nunc bibendum tempus nulla a gravida. Curabitur
              scelerisque libero in lorem tempus, sit amet bibendum dolor
              aliquam. Nunc fringilla arcu et ligula tristique, a gravida nulla
              condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}