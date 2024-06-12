import AreaChartXD from "@/components/area-chart";

export default function Home() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">Tremor Chats</h1>

          <div className="mt-12">
            <AreaChartXD />
          </div>
        </div>
      </section>
    </main>
  );
}
