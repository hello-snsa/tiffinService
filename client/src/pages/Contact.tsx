import ContactForm from "@/components/contact/ContactForm";
import DeliveryMap from "@/components/contact/DeliveryMap";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Delivery Area</h2>
          <DeliveryMap />

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Phone: +91 81590 67325</li>
              <li>Email: info@bengalitiffin.com</li>
              <li>Address: Whitefield, Bangalore - 560066</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}