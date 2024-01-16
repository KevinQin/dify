<<<<<<< HEAD
from core.model_runtime.model_providers.__base.model_provider import ModelProvider
import logging

=======
import logging

from core.model_runtime.model_providers.__base.model_provider import ModelProvider

>>>>>>> main
logger = logging.getLogger(__name__)


class OpenLLMProvider(ModelProvider):
    def validate_provider_credentials(self, credentials: dict) -> None:
        pass
