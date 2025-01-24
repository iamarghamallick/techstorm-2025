import SingleEventSlug from "@/components/SingleEventSlug";

export default async function SingleEventDetails({ params }) {
    const { slug } = await params;

    return (
        <main className="mt-16 md:mt-24 single-event-details-container min-h-screen flex justify-center p-2 py-8">
            <SingleEventSlug slug={slug} />
        </main>
    );
}
