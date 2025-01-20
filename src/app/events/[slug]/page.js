import EventCategorySlug from "@/components/EventCategorySlug";

export default async function EventDetails({ params }) {
    const { slug } = await params;

    return (
        <main className="event-details-container min-h-screen flex justify-center p-2 py-8">
            <EventCategorySlug slug={slug} />
        </main>
    );
}
