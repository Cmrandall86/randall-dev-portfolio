import {NextUIProvider} from '@nextui-org/react'

export default function NextUI_Provider({children}) {

    return (
      <div>
          <NextUIProvider>
              {children}
          </NextUIProvider>
      </div>
    )
  }