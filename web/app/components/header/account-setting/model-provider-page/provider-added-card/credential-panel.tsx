import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
import { useSWRConfig } from 'swr'
import type { ModelProvider } from '../declarations'
import {
  CustomConfigurationStatusEnum,
  PreferredProviderTypeEnum,
} from '../declarations'
import { useUpdateModelList } from '../hooks'
import PrioritySelector from './priority-selector'
import PriorityUseTip from './priority-use-tip'
=======
import type { ModelProvider } from '../declarations'
import {
  ConfigurateMethodEnum,
  CustomConfigurationStatusEnum,
  PreferredProviderTypeEnum,
} from '../declarations'
import {
  useUpdateModelList,
  useUpdateModelProviders,
} from '../hooks'
import PrioritySelector from './priority-selector'
import PriorityUseTip from './priority-use-tip'
import { UPDATE_MODEL_PROVIDER_CUSTOM_MODEL_LIST } from './index'
>>>>>>> main
import Indicator from '@/app/components/header/indicator'
import { Settings01 } from '@/app/components/base/icons/src/vender/line/general'
import Button from '@/app/components/base/button'
import { changeModelProviderPriority } from '@/service/common'
import { useToastContext } from '@/app/components/base/toast'
<<<<<<< HEAD
=======
import { useEventEmitterContextContext } from '@/context/event-emitter'
>>>>>>> main

type CredentialPanelProps = {
  provider: ModelProvider
  onSetup: () => void
}
const CredentialPanel: FC<CredentialPanelProps> = ({
  provider,
  onSetup,
}) => {
  const { t } = useTranslation()
  const { notify } = useToastContext()
<<<<<<< HEAD
  const { mutate } = useSWRConfig()
  const updateModelList = useUpdateModelList()
=======
  const { eventEmitter } = useEventEmitterContextContext()
  const updateModelList = useUpdateModelList()
  const updateModelProviders = useUpdateModelProviders()
>>>>>>> main
  const customConfig = provider.custom_configuration
  const systemConfig = provider.system_configuration
  const priorityUseType = provider.preferred_provider_type
  const customConfiged = customConfig.status === CustomConfigurationStatusEnum.active
<<<<<<< HEAD
=======
  const configurateMethods = provider.configurate_methods
>>>>>>> main

  const handleChangePriority = async (key: PreferredProviderTypeEnum) => {
    const res = await changeModelProviderPriority({
      url: `/workspaces/current/model-providers/${provider.provider}/preferred-provider-type`,
      body: {
        preferred_provider_type: key,
      },
    })
    if (res.result === 'success') {
      notify({ type: 'success', message: t('common.actionMsg.modifiedSuccessfully') })
<<<<<<< HEAD
      mutate('/workspaces/current/model-providers')
      updateModelList(1)
=======
      updateModelProviders()

      configurateMethods.forEach((method) => {
        if (method === ConfigurateMethodEnum.predefinedModel)
          provider.supported_model_types.forEach(modelType => updateModelList(modelType))
      })

      eventEmitter?.emit({
        type: UPDATE_MODEL_PROVIDER_CUSTOM_MODEL_LIST,
        payload: provider.provider,
      } as any)
>>>>>>> main
    }
  }

  return (
<<<<<<< HEAD
    <div className='shrink-0 relative ml-1 p-1 w-[112px] rounded-lg bg-white/[0.3] border-[0.5px] border-black/5'>
      <div className='flex items-center justify-between mb-1 pt-1 pl-2 pr-[7px] h-5 text-xs font-medium text-gray-500'>
        API-KEY
        <Indicator color={customConfiged ? 'green' : 'gray'} />
      </div>
      <div className='flex items-center gap-0.5'>
        <Button
          className='grow px-0 h-6 bg-white text-xs font-medium rounded-md'
          onClick={onSetup}
        >
          <Settings01 className='mr-1 w-3 h-3' />
          {t('common.operation.setup')}
        </Button>
        {
          systemConfig.enabled && customConfiged && (
=======
    <>
      {
        provider.provider_credential_schema && (
          <div className='shrink-0 relative ml-1 p-1 w-[112px] rounded-lg bg-white/[0.3] border-[0.5px] border-black/5'>
            <div className='flex items-center justify-between mb-1 pt-1 pl-2 pr-[7px] h-5 text-xs font-medium text-gray-500'>
              API-KEY
              <Indicator color={customConfiged ? 'green' : 'gray'} />
            </div>
            <div className='flex items-center gap-0.5'>
              <Button
                className='grow px-0 h-6 bg-white text-xs font-medium rounded-md'
                onClick={onSetup}
              >
                <Settings01 className='mr-1 w-3 h-3' />
                {t('common.operation.setup')}
              </Button>
              {
                systemConfig.enabled && customConfiged && (
                  <PrioritySelector
                    value={priorityUseType}
                    onSelect={handleChangePriority}
                  />
                )
              }
            </div>
            {
              priorityUseType === PreferredProviderTypeEnum.custom && systemConfig.enabled && (
                <PriorityUseTip />
              )
            }
          </div>
        )
      }
      {
        systemConfig.enabled && customConfiged && !provider.provider_credential_schema && (
          <div className='ml-1'>
>>>>>>> main
            <PrioritySelector
              value={priorityUseType}
              onSelect={handleChangePriority}
            />
<<<<<<< HEAD
          )
        }
      </div>
      {
        priorityUseType === PreferredProviderTypeEnum.custom && systemConfig.enabled && (
          <PriorityUseTip />
        )
      }
    </div>
=======
          </div>
        )
      }
    </>
>>>>>>> main
  )
}

export default CredentialPanel
