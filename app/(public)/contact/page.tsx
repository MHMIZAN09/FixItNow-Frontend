const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have any questions or feedback? Feel free to reach out to us!
      </p>
      <p className="mb-4">
        You can contact us via email at{" "}
        <a
          href="mailto:info@company.com"
          className="text-blue-500 hover:underline"
        >
          info@company.com
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
