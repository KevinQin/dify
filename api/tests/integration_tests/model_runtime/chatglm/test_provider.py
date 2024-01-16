import os

import pytest
<<<<<<< HEAD

from core.model_runtime.errors.validate import CredentialsValidateFailedError
from core.model_runtime.model_providers.chatglm.chatglm import ChatGLMProvider

from tests.integration_tests.model_runtime.__mock.openai import setup_openai_mock

=======
from core.model_runtime.errors.validate import CredentialsValidateFailedError
from core.model_runtime.model_providers.chatglm.chatglm import ChatGLMProvider
from tests.integration_tests.model_runtime.__mock.openai import setup_openai_mock


>>>>>>> main
@pytest.mark.parametrize('setup_openai_mock', [['chat']], indirect=True)
def test_validate_provider_credentials(setup_openai_mock):
    provider = ChatGLMProvider()

    with pytest.raises(CredentialsValidateFailedError):
        provider.validate_provider_credentials(
            credentials={
                'api_base': 'hahahaha'
            }
        )

    provider.validate_provider_credentials(
        credentials={
            'api_base': os.environ.get('CHATGLM_API_BASE')
        }
    )
