const Card = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm border-2 border-secondary rounded-lg bg-primary p-8 m-6">
      <h4 className="mb-4 mt-2 w-full text-3xl font-bold text-secondary">
        Dark Mode
      </h4>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed
        blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque
        optio impedit cum voluptatem facilis minima, quasi laborum. Nihil,
        quaerat.
      </p>

      <button className="bg-cta hover:bg-cta-active transition-colors text-cta-text font-semibold w-full py-2 rounded-md mt-8">
        Sign Up
      </button>
    </div>
  );
};

export default Card;
