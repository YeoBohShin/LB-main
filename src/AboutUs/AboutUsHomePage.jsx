import { motion } from "framer-motion";

export default function AboutUsHomePage() {
  return (
    <div className="flex flex-col items-center text-center mx-5 xl:mx-0 xl:min-h-screen xl:flex-row">
        <motion.div
            className="w-full max-w-3xl xl:m-10 hidden xl:block"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
            <img
                src="./LimoButler.jpeg"
                alt="About Us"
                className="w-full h-auto rounded-4xl shadow-lg"
            />
        </motion.div>
        <motion.div
            className="w-full max-w-3xl xl:m-10 hidden xl:block text-black"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
            <h1 className="text-5xl mb-5">Limo Butler Pte Ltd</h1>
            <p className="text-lg mb-5 text-justify">
                At Limo Butler Pte Ltd, we are more than just a limousine service. 
                With years of proven experience supporting high-profile corporate 
                clients, international conferences, and large-scale events, we 
                specialise in delivering seamless, end-to-end transport solutions 
                tailored to the needs of organisers and VIP guests. 
                <br />
                <br />
                Our expertise extends beyond luxury vehicles. We bring a complete 
                fleet management approach, from sourcing and coordinating large 
                vehicle fleets, to recruiting and deploying professional chauffeurs. 
                This ensures every journey reflects the highest standard of service, 
                efficiency, and reliability.
                <br />
                <br />
                What sets us apart is our focus on people. We uphold exceptional 
                service quality, ensuring every guest enjoys a safe, professional, 
                and welcoming experience. In addition, our strong commitment to 
                Health, Safety & Environment (HSE) standards gives organisers peace 
                of mind, knowing that their guests' wellbeing is always our priority.
                <br />
                <br />
                Looking ahead, Limo Butler Pte Ltd continues to strengthen its role 
                as a trusted partner for event organisers, providing not just 
                transportation, but expert consultation in fleet operations and 
                logistics management. Whether for global conferences, sporting events, 
                or corporate hospitality, we are dedicated to helping our clients 
                deliver flawless event experiences, with every detail on the road taken 
                care of.
            </p>
        </motion.div>
    </div>
  );
}