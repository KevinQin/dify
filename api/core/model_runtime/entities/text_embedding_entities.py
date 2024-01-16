from decimal import Decimal

<<<<<<< HEAD
from pydantic import BaseModel

from core.model_runtime.entities.model_entities import ModelUsage
=======
from core.model_runtime.entities.model_entities import ModelUsage
from pydantic import BaseModel
>>>>>>> main


class EmbeddingUsage(ModelUsage):
    """
    Model class for embedding usage.
    """
    tokens: int
    total_tokens: int
    unit_price: Decimal
    price_unit: Decimal
    total_price: Decimal
    currency: str
    latency: float


class TextEmbeddingResult(BaseModel):
    """
    Model class for text embedding result.
    """
    model: str
    embeddings: list[list[float]]
    usage: EmbeddingUsage

