import { selectAllKids } from "../slices/kidsSlice"

export default function Quiz() {
  const { kids, error, isFetching } = selectAllKids('kids')
  console.log(kids, "Quiz component")
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = kidsAPi.endpoints.getKidByName.useQuery('kids')
  // [kidsApi.reducerPath]: kidsApi.reducer
  return (
    <div className="bg-white">
      {error ? (<>Oh no, something went wrong</>
      ) : isFetching ? (
      <>Loading...</>
      ) : kids ? (
        <>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {kids.map((kid) => (
                <div key={kid.id} className="group relative">
                  <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={kid.avatar}
                      alt={kid.avatar}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={kid.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {kid.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{kid.age}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{kid.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}