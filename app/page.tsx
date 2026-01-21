import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Certificates from "@/components/main/Certificates";
import Contact from "@/components/main/Contact";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Certificates />
				<Contact />
			</div>
		</main>
	);
}  