import { useSelector } from "react-redux"

const KidsList = () => {
    const kids = useSelector(store => store.authReducer.kids);

    return (
      <div className="inline-block overflow-hidden bg-white shadow sm:rounded-lg">
      {kids.map((kid) => (
        <>
        <div key={kid.id} className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">{kid.name}</h3>
        </div>
        <div  className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{kid.age}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Grade</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{kid.grade}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Avatar</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{kid.avatar}</dd>
            </div>   
          </dl>
        </div>
        </>
      ))}        
      </div>
    )
  }
  export default KidsList