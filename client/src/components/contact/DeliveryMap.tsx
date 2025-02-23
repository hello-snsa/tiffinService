import { Card } from "@/components/ui/card";

export default function DeliveryMap() {
  return (
    <Card className="p-4">
      <div className="aspect-video w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.787073501287!2d77.7398193!3d12.9683836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1196bb3b7805%3A0xc7aa55d05ddb0d7!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647270635432!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Delivery Area</h3>
        <p className="text-sm text-muted-foreground">
          We currently deliver within a 5km radius of our kitchen in Whitefield,
          Bangalore - 560066.
        </p>
      </div>
    </Card>
  );
}