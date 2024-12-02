import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constanst";
import Image from "next/image";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-44 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <p className="text-center">Simplifying Access to Government Schemes</p>
        <div className="bg-gradient-to-r from-violet-600 to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-4xl md:text-9xl font-bold text-center md:text-[310px]">ezScheme</h1>
        </div>
       
        <div className="flex justify-center items-center relative md:mt-[-80px]">
          {/*TODO: Replace with actual preview once done*/}
          <Image src={"/assets/demo.png"} alt="Preview image" width={1200} height={1200} 
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      
      <section className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10">
        <h2 className="text-4xl text-center">Features of ezScheme</h2>
        <p className="text-muted-foreground text-center">
          ezScheme simplifies access to government schemes by consolidating information and tailoring it to individual needs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          <Card className="w-[300px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Personalized Video Content</CardTitle>
              <CardDescription>Get personalized video content tailored to your needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/assets/video-content.png" alt="Video Content" width={300} height={200} />
            </CardContent>
          </Card>
          <Card className="w-[300px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Virtual Assistant</CardTitle>
              <CardDescription>Ask detailed queries and get instant responses.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/assets/virtual-assistant.png" alt="Virtual Assistant" width={300} height={200} />
            </CardContent>
          </Card>
          <Card className="w-[300px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Recommendation Engine</CardTitle>
              <CardDescription>Identify relevant schemes based on your input.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/assets/recommendation-engine.png" alt="Recommendation Engine" width={300} height={200} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10 ">
        <h2 className="text-4xl text-center">Choose your plans</h2>
        <p className="text-muted-foreground text-center">
          Explore our plans and pricing options to get started on simplifying access to government schemes today!
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card key={card.title} 
            className={clsx('w-[300px] flex flex-col justify-between', 
              {'border-2 border-violet-600' : card.title === 'Unlimited Saas',})}>
              <CardHeader>
                <CardTitle className={clsx('', {
                  'text-muted-foreground' : card.title !== 'Unlimited Saas',
                })}>{card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/month</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan=${card.priceId}`}
                  className={clsx('w-full text-center bg-violet-600 p-2 rounded-md',
                    {'!bg-muted-foreground' : card.title === 'Unlimited Saas',})}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>  
          ))}
        </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10">
        <h2 className="text-4xl text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4 mt-6 w-full max-w-2xl">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">What is ezScheme?</h3>
            <p className="text-muted-foreground">
              ezScheme is a solution that simplifies access to government schemes by consolidating information and tailoring it to individual needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">How does the recommendation engine work?</h3>
            <p className="text-muted-foreground">
              The recommendation engine identifies relevant schemes based on user input and provides personalized suggestions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">What features does ezScheme offer?</h3>
            <p className="text-muted-foreground">
              ezScheme offers personalized video content, a virtual assistant for detailed queries, and a recommendation engine to identify relevant schemes.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">What are the future enhancements?</h3>
            <p className="text-muted-foreground">
              Future enhancements include smarter scheme recommendations, topic-based model questions, saved business context, and predictive scheme relevance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}