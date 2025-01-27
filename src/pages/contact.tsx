function ContactContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-medium">Contact</h1>
      <p className="mt-4">
        You can contact me at
        {' '}
        <a href="mailto:crcravi66@gmail.com">crcravi66@gmail.com</a>
      </p>
    </div>
  );
}

export default function Contact() {
  return (
    <HomeLayout>
      <ContactContent />
    </HomeLayout>
  );
}
