export default async function SingleEventDetails({ params }) {
    const { slug } = await params;

    return (
        <main className="event-details-container min-h-screen flex justify-center p-2 py-8">
            {slug}
        </main>
    );
}
