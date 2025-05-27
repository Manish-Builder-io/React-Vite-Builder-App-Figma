interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => (
  <h1 className="my-heading">{title}</h1>
);

export default Heading;
