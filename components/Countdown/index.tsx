type Props = {
  endDate: Date;
};

const Countdown = ({ endDate }: Props) => {
  return (
    <>
      <h3>{endDate.toISOString()}</h3>
    </>
  );
};

export default Countdown;
